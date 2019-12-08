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

  # Test suite for POST /conferences
  describe 'POST /conferences' do
    # valid payload
    let(:valid_attributes) { attributes_for(:conference, name: 'JavaScript Conf', creator_id: user.id.to_s).to_json }

    context 'when the request is valid' do
      before { post '/conferences', params: valid_attributes, headers: headers }

      it 'creates a conference' do
        expect(json['name']).to eq('JavaScript Conf')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'when the request is invalid' do
      before { post '/conferences', params: { name: '' }.to_json, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # Test suite for PUT /conferences/:id
  describe 'PUT /conferences/:id' do
    let(:valid_attributes) { { name: 'Ruby Conf' }.to_json }

    context 'when the record exists' do
      before { put "/conferences/#{conference_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(:no_content)
      end
    end
  end

  # Test suite for DELETE /conferences/:id
  describe 'DELETE /conferences/:id' do
    before { delete "/conferences/#{conference_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(:no_content)
    end
  end
end
