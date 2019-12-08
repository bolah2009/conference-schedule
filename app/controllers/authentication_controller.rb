# frozen_string_literal: true

class AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate

  def authenticate
    auth_token =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    current_user = User.find_by_email!(auth_params[:email])
    json_response(authorization: auth_token, user: current_user)
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end
