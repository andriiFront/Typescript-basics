enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const reverseMembership = Membership[2]

console.log(membership)           // 2
console.log(reverseMembership)    // 'Premium'

enum SocialMedia {
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter'
}

const social = SocialMedia.INSTAGRAM
console.log(social)               // 'Instagram'
