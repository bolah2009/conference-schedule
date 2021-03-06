# frozen_string_literal: true

# spec/requests/schedules_spec.rb
require 'rails_helper'

RSpec.describe 'Schedules API', type: :request do
  let(:user) { create(:user) }
  let!(:agendas) { create_list(:agenda, 10) }
  let(:id) { agendas.first.id }
  let(:schedule) { create(:schedule, user_id: user.id, agenda_id: id) }
  let(:schedule_id) { schedule.id }
  let(:headers) { valid_headers }
  let(:invalid_headers) { valid_headers.except('Authorization') }

  describe 'GET /schedules' do
    context 'when a schedule exists' do
      before do
        schedule
        get '/schedules', params: {}, headers: headers
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns all schedules' do
        expect(json.size).to eq(1)
      end
    end

    context 'when user is not authorised' do
      before { get '/schedules', params: {}, headers: invalid_headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns a not found message' do
        expect(response.body).to match(%r{Please login/signup to continue.})
      end
    end
  end

  describe 'POST /schedules' do
    let(:valid_attributes) do
      { agenda_id: id }.to_json
    end

    context 'when request attributes are valid' do
      before { post '/schedules', params: valid_attributes, headers: headers }

      it 'returns status code :created (201)' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'when request attributes are invalid' do
      before { post '/schedules', params: {}, headers: headers }

      it 'returns status code :unprocessable_entity (422)' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Agenda must exist/)
      end
    end
  end

  # Test suite for DELETE /schedules/:id
  describe 'DELETE /schedules/:id' do
    before { delete "/schedules/#{schedule_id}", params: {}, headers: headers }

    it 'returns status code 202' do
      expect(response).to have_http_status(:accepted)
    end
  end

  # Test suite for DELETE /schedules/:id
  describe 'DELETE /schedules/:id' do
    before { delete "/schedules/#{schedule_id}", params: {}, headers: { Authorization: 'invalid' } }

    it 'returns status code 422' do
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
