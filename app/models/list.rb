class List < ApplicationRecord
  validates :title, :desc, presence: true
  has_many :todos, dependent: :destroy
end
