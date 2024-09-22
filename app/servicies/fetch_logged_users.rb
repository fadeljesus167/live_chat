class FetchLoggedUsers
  def self.fetch_user(token)
    if Rails.cache.exist?(token)
      Rails.cache.read(token)
    end
  end
end
