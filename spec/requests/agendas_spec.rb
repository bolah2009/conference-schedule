# frozen_string_literal: true

# spec/requests/agendas_spec.rb
require 'rails_helper'

RSpec.describe 'Agendas API', type: :request do
  let(:user) { create(:user) }
  let!(:conference) { create(:conference, creator_id: user.id) }
  let!(:agendas) { create_list(:agenda, 10, conference_id: conference.id) }
  let(:conference_id) { conference.id }
  let(:id) { agendas.first.id }
  let(:headers) { valid_headers }

  describe 'GET /conferences/:conference_id/agendas' do
    before { get "/conferences/#{conference_id}/agendas", params: {}, headers: headers }

    context 'when conference exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns all conference agendas' do
        expect(json.size).to eq(10)
      end
    end

    context 'when conference does not exist' do
      let(:conference_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Conference/)
      end
    end
  end

  describe 'GET /conferences/:conference_id/agendas/:id' do
    before { get "/conferences/#{conference_id}/agendas/#{id}", params: {}, headers: headers }

    context 'when conference agenda exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the agenda' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when conference agenda does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Agenda/)
      end
    end
  end
end
