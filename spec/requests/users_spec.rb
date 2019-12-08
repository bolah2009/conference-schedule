# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let(:user) { build(:user) }
  let(:headers) { valid_headers.except('Authorization') }
  let(:valid_attributes) do
    attributes_for(:user)
  end

  # User signup test suite
  describe 'POST /signup' do
    context 'when valid request' do
      before { post '/signup', params: valid_attributes.to_json, headers: headers }

      it 'creates a new user' do
        expect(response).to have_http_status(:created)
      end

      it 'returns success message' do
        expect(json['message']).to match(/Account created successfully/)
      end

      it 'returns an authentication token' do
        expect(json['authorization']).not_to be_nil
      end
    end

    context 'when invalid request' do
      it 'does not create a new user' do
        post '/signup', params: {}, headers: headers
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns failure message for blank email' do
        invalid_attributes = attributes_for(:user, email: '', password_confirmation: user.password)

        post '/signup', params: invalid_attributes.to_json, headers: headers
        expect(json['message'])
          .to match(/Email can't be blank/)
      end

      it 'returns failure message for blank name' do
        invalid_attributes = attributes_for(:user, name: '', password_confirmation: user.password)

        post '/signup', params: invalid_attributes.to_json, headers: headers
        expect(json['message'])
          .to match(/Name can't be blank/)
      end

      it 'returns failure message for blank password' do
        invalid_attributes = attributes_for(:user, password: '', password_confirmation: user.password)

        post '/signup', params: invalid_attributes.to_json, headers: headers
        expect(json['message'])
          .to match(/Password can't be blank/)
      end

      it 'returns failure message for blank job title' do
        invalid_attributes = attributes_for(:user, job_title: '', password_confirmation: user.password)

        post '/signup', params: invalid_attributes.to_json, headers: headers

        expect(json['message'])
          .to match(/Job title can't be blank/)
      end

      it 'returns failure message for unmatched confirmation password' do
        invalid_attributes = attributes_for(:user, password_confirmation: 'unmatched password')

        post '/signup', params: invalid_attributes.to_json, headers: headers

        expect(json['message'])
          .to match(/Password confirmation doesn't match Password/)
      end
    end
  end
end
