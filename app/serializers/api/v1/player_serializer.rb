class Api::V1::PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes FastJsonapi::ObjectSerializer
  set_type :execution
  attributes :id, :start_date, :end_date, :elapsed_time
  belongs_to :movie
end
