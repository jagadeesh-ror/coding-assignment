class CsvImport
  def initialize(params)
    @params = params
  end

  def process_csv_file
    csv_text = File.read(@params[:upload].path)
    csv = CSV.new(csv_text, :headers => true, :header_converters => :symbol, :converters => :all, :quote_char => "\x00")
    rows, role_names, mapping_names = [], [], []
    csv.to_a.map.each_with_index do |row, index|
      role_names << row[:role]
      mapping_names << row[:mapping]
      rows << row
    end
    created_roles, created_mappings = {}, {}
    role_names.uniq.each do |role_name|
      new_role = Role.find_or_create_by(name: role_name)
      created_roles["#{role_name}"] = new_role.id
    end
    mapping_names.uniq.each do |mapping_name|
      new_mapping = Mapping.find_or_create_by(name: mapping_name)
      created_mappings["#{mapping_name}"] = new_mapping.id
    end
    rows.each do |row|
      question = Question.find_or_create_by(content: row[:question])
      question.attributes = {
        pri: row[:pri],
        content: row[:question], 
        teaming_stages: row[:teaming_stages],
        appears_day: row[:appears_day],
        frequency: row[:frequency],
        qtype: row[:type],
        required: row[:required] == "yes" ? true : false,
        conditions: row[:conditions],
        mapping_id: created_mappings[row[:mapping]]
      }
      question.save
    end
  end
end