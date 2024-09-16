class EncryptService
  def self.generate_session_token
    SecureRandom.base64(24)
  end
end
