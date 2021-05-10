class Api::V1::UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes FastJsonapi::ObjectSerializer
  attributes :name, :email
end
