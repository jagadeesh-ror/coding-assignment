module Api
  module V1
    class RolesController < ApplicationController
      protect_from_forgery with: :null_session 
      # before_action :set_role, only: [:show, :update, :destroy]
      def index
        roles = Role.all
        render json: RoleSerializer.new(roles).serialized_json
      end

      def show
        role = Role.find_by_id(params[:id])
        render json: RoleSerializer.new(role).serialized_json
      end

      def create
        role = Role.new(role_params)
        if role.save
          render json: RoleSerializer.new(role).serialized_json
        else
          render json: { error: role.errors.messages }, status: 422
        end
      end

      def update
        role = Role.find_by_id(params[:id])
        if role.update(role_params)
          render json: RoleSerializer.new(role).serialized_json
        else
          render json: { error: role.errors.messages }, status: 422
        end
      end

      def destroy
        role = Role.find_by_id(params[:id])
        if role.destroy
          head :no_content
        else
          render json: { error: role.errors.messages }, status: 422
        end
      end

      private

      def set_mapping
        role = Role.find_by_id(params[:id])
      end

      def role_params
        params.require(:mapping).permit(:name)
      end
    end
  end
end