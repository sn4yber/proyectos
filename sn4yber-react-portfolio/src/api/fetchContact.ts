export const fetchContact = async () => {
  return {
    contactInfo: [
      {
        icon: 'Mail',
        title: 'Email',
        content: 'snayber333@gmail.com',
        href: 'snayber333@gmail.com',
      },
      {
        icon: 'MapPin',
        title: 'Ubicación',
        content: 'Cartagena, Colombia',
      },
    ],
    socialLinks: [
      {
        name: 'GitHub',
        icon: 'Github',
        href: 'https://github.com/sn4yber',
      },
      {
        name: 'Instagram',
        icon: 'Instagram',
        href: 'https://www.instagram.com/sn4yber_0x/',
      },
      {
        name: 'WhatsApp',
        icon: 'MessageCircle',
        href: 'https://wa.me/573205382409',
      },
    ]
  }
}
