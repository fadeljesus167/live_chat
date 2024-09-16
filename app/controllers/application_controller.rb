class ApplicationController < ActionController::API
  @@users_sessions = {}

  private
  def add_new_user_session(user_id, token)
    @@users_sessions[user_id] = token
  end

  def show_sessions
    @@users_sessions
  end
end
