class Api::V1::ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes FastJsonapi::ObjectSerializer
  attributes :rating, :description
  belongs_to :user
end
