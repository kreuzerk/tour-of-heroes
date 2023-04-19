import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.hero.createMany({
    data: [{
      id: 1,
      name: 'Windstorm'
    },
      {
        id: 2,
        name: 'Bombasto'
      },
      {
        id: 3,
        name: 'Magneta'
      }
    ]
  })
}

main()
  .then(() => {
    console.log('done');
    process.exit(0);
  }).catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});
