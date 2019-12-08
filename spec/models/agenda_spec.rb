# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Agenda, type: :model do
  it { is_expected.to belong_to(:conference) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:description) }
  it { is_expected.to validate_presence_of(:startTime) }
  it { is_expected.to validate_presence_of(:endTime) }
  it { is_expected.to validate_presence_of(:location) }
end
