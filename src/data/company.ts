export const company = {
  name: 'Data Formaturas',
  foundedYear: 2005,
  yearsOfTradition: '20+',
  address: {
    street: 'Rua Curitiba, 1395',
    neighborhood: 'Centro',
    city: 'Francisco Beltrão',
    state: 'PR',
  },
  contact: {
    phone: '(46) 3524-9722',
    phoneHref: 'tel:+554635249722',
    whatsapp: '(46) 99917-2056',
    whatsappHref: 'https://wa.me/5546999172056',
    email: 'contato@dataformaturas.com.br',
  },
  businessHours: 'Segunda a sexta, 8h às 18h',
  // PROVISÓRIO: números estimados para a apresentação ao cliente. Confirmar valores reais antes de publicar.
  metrics: {
    eventsRealized: '+1.000',
    graduatesServed: '+45.000',
    onTimeDeliveryRate: '100%',
    citiesServed: '+15',
  },
} as const
