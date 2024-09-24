class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    pp params
    sanitized_params = message_params
    new_message = { content: sanitized_params[:content], user_id: FetchLoggedUsers.fetch_user(sanitized_params[:session_token]) }
    @message = Message.new(new_message)

    if @message.save
      notify_all_users_new_message(@message)
      render json: { confirm: "el mensaje fue guardado :D" }, status: :created
    else
      render json: { error: "failed to send the message" }, status: :unprocessable_entity
    end
  end

  private
    def message_params
      params.require(:message).permit(:content, :session_token)
    end

    def notify_all_users_new_message(new_message)
      ActionCable.server.broadcast("chat_channel", { username: new_message.user.username, content: new_message.content })
    end
end
