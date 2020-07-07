module Api
  module V1
    class MappingsController < ApplicationController
      protect_from_forgery with: :null_session 
      # before_action :set_mapping, only: [:show, :update, :destroy]
      def index
        mappings = Mapping.all
        render json: MappingSerializer.new(mappings, options).serialized_json
      end

      def show
        mapping = Mapping.find_by_id(params[:id])
        render json: MappingSerializer.new(mapping, options).serialized_json
      end

      def create
        mapping = Mapping.new(mapping_params)
        if mapping.save
          render json: MappingSerializer.new(mapping, options).serialized_json
        else
          render json: { error: mapping.errors.messages }, status: 422
        end
      end

      def update
        mapping = Mapping.find_by_id(params[:id])
        if mapping.update(mapping_params)
          render json: MappingSerializer.new(mapping, options).serialized_json
        else
          render json: { error: mapping.errors.messages }, status: 422
        end
      end

      def destroy
        mapping = Mapping.find_by_id(params[:id])
        if mapping.destroy
          head :no_content
        else
          render json: { error: mapping.errors.messages }, status: 422
        end
      end

      private

      def set_mapping
        mapping = Mapping.find_by_id(params[:id])
      end

      def options
        @options ||= { include: %i[questions] }
      end

      def mapping_params
        params.require(:mapping).permit(:name)
      end
    end
  end
end