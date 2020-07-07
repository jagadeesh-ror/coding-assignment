module Api
  module V1
    class QuestionsController < ApplicationController
      protect_from_forgery with: :null_session 
      before_action :set_question, only: [:show, :update, :destroy]
      def index
        questions = Question.all
        render json: QuestionSerializer.new(questions).serialized_json
      end

      def show
        question = Question.find_by_id(params[:id])
        render json: QuestionSerializer.new(question).serialized_json
      end

      def create
        question = Question.new(question_params)
        if question.save
          render json: QuestionSerializer.new(question).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def update
        question = Question.find_by_id(params[:id])
        if question.update(question_params)
          render json: QuestionSerializer.new(question).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def destroy
        question = Question.find_by_id(params[:id])
        if question.destroy
          head :no_content
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      private

      def set_question
        question = Question.find_by_id(params[:id])
      end

      def question_params
        params.require(:question).permit(:pri, :content, :teaming_stages, :appears_day, :frequency, 
                                         :qtype, :required, :conditions, :mapping_id)
      end
    end
  end
end