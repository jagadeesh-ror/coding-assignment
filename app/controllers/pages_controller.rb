require 'csv'
class PagesController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def import_csv
  end

  def submit_csv
    CsvImport.new(params).process_csv_file
    redirect_to "/", notice: "File Imported Successfully"
  end
end
