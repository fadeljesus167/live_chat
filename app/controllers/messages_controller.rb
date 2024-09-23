class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages, status: :ok
  end

  def create
    sanitized_params = message_params
    new_message = { content: sanitized_params[:content], user_id: FetchLoggedUsers.fetch_user(sanitized_params[:session_token]) }
    @message = Message.new(new_message)

    if @message.save
      render json: { confirm: "el mensaje fue guardado :D" }, status: :created
    else
      render json: { error: "failed to send the message" }, status: :unprocessable_entity
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :session_token)
  end
end
