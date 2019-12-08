# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :authorize_request, only: %i[create]

  def create
    user = User.create!(user_params)
    current_user = User.find_by_email(user.email)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, user: current_user, authorization: auth_token }
    json_response(response, :created)
  end

  private

  def user_params
    params.permit(
      :name,
      :email,
      :job_title,
      :password,
      :password_confirmation
    )
  end
end
