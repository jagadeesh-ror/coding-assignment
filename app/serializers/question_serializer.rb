class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :pri, :content, :teaming_stages, :appears_day, :frequency, 
             :qtype, :required, :conditions, :mapping_id
end
