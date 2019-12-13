# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Conference API', type: :request do
  # initialize test data
  let(:user) { create(:user) }
  let!(:conferences) { create_list(:conference, 5, creator_id: user.id) }
  let(:conference_id) { conferences.first.id }
  let(:headers) { valid_headers }

  # Test suite for GET /conferences
  describe 'GET /conferences' do
    # make HTTP get request before each example
    before { get '/conferences', params: {}, headers: headers }

    it 'returns conferences with non empty json response' do
      expect(json).not_to be_empty
    end

    it 'returns conferences with a valid size' do
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end
  end

  # Test suite for GET /conferences/:id
  describe 'GET /conferences/:id' do
    before { get "/conferences/#{conference_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the conference with non empty response' do
        expect(json).not_to be_empty
      end

      it 'returns the conference valid conference id' do
        expect(json['id']).to eq(conference_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when the record does not exist' do
      let(:conference_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Conference/)
      end
    end
  end
end
