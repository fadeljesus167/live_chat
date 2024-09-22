class ApplicationController < ActionController::API
  before_action :protect_resources

  private
  def add_new_user_session(user_id, token)
    Rails.cache.write(token, user_id)
  end

  def protect_resources
    if params[:session_token].nil? || !Rails.cache.exist?(params[:session_token])
      render json: { message: "You're not allowed here >.>" }, status: :unauthorized
    end
  end
end
