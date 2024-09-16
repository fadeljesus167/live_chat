class Authentication::SessionsController < ApplicationController
  def create
    user ||= User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      token = EncryptService.generate_session_token
      add_new_user_session(user.id, token)
      render json: { session_token: token }, status: :created
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private
  def sessions_params
    params.require(:username).permit(:username, :password)
  end
end
