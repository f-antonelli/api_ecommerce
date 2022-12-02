export const SwaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Ecommerce API',
      description: 'A simple ecommerce API',
      version: '1.0.1',
      contact: {
        name: 'Federico Antonelli',
        email: 'antonelli@gmail.com',
        url: 'http://localhost:3001',
      },
    },
  },
  apis: ['src/docs/**/*.yml'],
};
