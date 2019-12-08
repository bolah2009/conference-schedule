# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  email = 'test@example.com'

  before do
    create(:user)
    create(:user, email: email)
  end

  let(:find_by_email_user) { described_class.find_by_email(email) }

  it { is_expected.to have_many(:conferences).with_foreign_key('creator_id').dependent(:destroy) }
  it { is_expected.to have_many(:schedules).with_foreign_key('user_id').dependent(:destroy) }

  it { is_expected.to have_secure_password }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:job_title) }
  it { is_expected.to validate_presence_of(:password) }
  it { is_expected.to validate_presence_of(:password_digest) }

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }

  it { is_expected.to validate_confirmation_of(:password) }

  it { is_expected.to validate_length_of(:password).is_at_least(6) }
  it { is_expected.to validate_length_of(:email).is_at_most(100) }

  describe '#find_by_email' do
    it 'returns a user name' do
      expect(find_by_email_user['name']).not_to be_empty
    end

    it 'returns a user email' do
      expect(find_by_email_user['email']).to eq email
    end

    it 'returns a user job_title' do
      expect(find_by_email_user['job_title']).not_to be_empty
    end
  end
end
