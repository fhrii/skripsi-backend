import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const jerukLemon = await prisma.fruit.create({
    data: {
      name: 'Jeruk Lemon',
      slug: 'jeruk_lemon',
      scientificName: 'Citrus limon',
      description:
        'Jeruk lemon (Citrus limon) merupakan salah satu famili dari tanaman jeruk yang dikenal dengan nama citrun, buahnya berbentuk lonjong, bulat dengan diameter 5 -7 cm  atau lebih ada tonjolan pada ujungnya, tidak berbji kalau ada biasanya satu atau dua,  warna kulit pada buah yang telah matang berwarna kuning cerah, rasanya asam, sepet, sedikit manis. Lemon lebih populer dalam industri kuliner karena memiliki aroma citrus yang segar dan bagian yang digunakan air perasan dan kulitnya. Dibalik rasanya yang asam jeruk lemon  (Citrus limon)  merupakan tanaman yang sangat bermanfaat bagi kesehatan maupun untuk kecantikan.\nAir perasan buah lemon sangat bermanfaat sebagai anti bakteri dan sebagai antioksidan, karena mengandung vitamin C.  Kadungan asam sitrat yang mampu menurunkan pH sel bakteri sehingga mampu menghambat aktivitas sel bakteri.',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1624964059/attached_image/tujuh-manfaat-lemon-untuk-kesehatan-dan-kecantikan.jpg',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lemon_-_whole_and_split.jpg/800px-Lemon_-_whole_and_split.jpg',
          },
          {
            url: 'https://awsimages.detik.net.id/community/media/visual/2022/05/27/lemon.jpeg?w=700&q=90',
          },
          {
            url: 'https://cdn-cas.orami.co.id/parenting/images/lemon-1117568_640.width-800.jpg',
          },
        ],
      },
    },
  });

  const jerukMandarin = await prisma.fruit.create({
    data: {
      name: 'Jeruk Mandarin (Jeruk Keprok)',
      slug: 'jeruk_mandarin',
      scientificName: 'Citrus reticulata',
      description:
        'Tumbuhan ini merupakan jenis pohon dengan tinggi 2-8 meter. Tangkai daun bersayap sangat sempit sampai boleh dikatakan tidak bersayap, panjang 0,5-1,5 cm. Helaian daun berbentuk bulat telur memanjang, elliptis atau berbentuk lanset dengan ujung tumpul, melekuk ke dalam sedikit, tepinya bergerigi beringgit sangat lemah dengan panjang 3,5-8 cm. Bunganya mempunyai diameter 1,5-2,5 cm, berkelamin dua daun mahkotanya putih. Buahnya berbentuk bola tertekan dengan panjang 5-8 cm, tebal kulitnya 0,2-0,3 cm dan daging buahnya berwarna oranye. Rantingnya tidak berduri dan tangkai daunnya selebar 1-1,5 mm.\nJeruk mandarin mengandung senyawa flavonoid yang merupakan antioksidan. Senyawa ini berguna membantu mempertahankan tubuh dari ketidakseimbangan radikal bebas yang dapat menyebabkan oksidasi. Selain itu, kandungan flavonoid juga mampu mematikan sel-sel kanker yang bisa memicu risiko penyakit kanker. Kandungan vitamin C di dalam jeruk ini berguna meningkatkan fungsi sel kekebalan demi melawan kerusakan oksidatif.',
      images: {
        create: [
          {
            url: 'https://cdn-asset.jawapos.com/wp-content/uploads/2020/01/Jeruk-Mandarin-Pixabay.jpg',
          },
          {
            url: 'https://assets.digination.id/crop/0x0:0x0/x/photo/2020/01/22/147308224.jpg',
          },
          {
            url: 'https://asset.kompas.com/crops/Vjy4jfpmUpYgAlCtjLLtx5e8-rM=/0x98:1280x952/780x390/data/photo/2022/01/31/61f75d064f1ff.jpg',
          },
          {
            url: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/8/22/fa9a15cf-e0ee-4acc-8700-9fd91054cf82.jpg',
          },
        ],
      },
    },
  });

  const jerukNipis = await prisma.fruit.create({
    data: {
      name: 'Jeruk Nipis',
      slug: 'jeruk_nipis',
      scientificName: 'Citrus aurantiifolia',
      description:
        'Jeruk nipis (Citrus aurantifolia) adalah tanaman yang berasal dari Asia dan tumbuh subur pada daerah yang beriklim tropis. Jeruk nipis merupakan salah satu tanaman yang berasal dari famili Rutaceae dengan genus Citrus. Jeruk nipis memiliki tinggi sekitar 150-350 cm dan buah berkulit tipis serta bunga berwarna putih. Tanaman ini memiliki kandungan garam 10% dan dapat tumbuh subur pada tanah yang kemiringannya sekitar 30°.\nSebagai herbal alami, jeruk nipis berkhasiat untuk menghilangkan sumbatan vital energi, obat batuk, peluruh dahak (mukolitik), peluruh kencing (diuretik) dan keringat, serta membantu proses pencernaan.',
      images: {
        create: [
          {
            url: 'https://www.panggungharjo.desa.id/wp-content/uploads/2018/05/manfaat-jeruk-nipis-untuk-wajah-696x464.jpg',
          },
          {
            url: 'https://static.honestdocs.id/system/blog_articles/main_hero_images/000/001/599/original/Manfaat_Jeruk_Nipis_dan_Kandungannya__Terbukti_Ilmiah!.jpg',
          },
          {
            url: 'https://pasarrabutani.com/wp-content/uploads/2020/05/Jeruk-Nipis-Segar-JeNiSe.jpeg',
          },
          {
            url: 'https://www.morulaivf.co.id/wp-content/uploads/2021/05/manfaat-jeruk-nipis-untuk-ibu-hamil.jpg',
          },
        ],
      },
    },
  });

  const jerukPontianak = await prisma.fruit.create({
    data: {
      name: 'Jeruk Pontianak',
      slug: 'jeruk_pontianak',
      scientificName: 'Citrus nobilis var. microcarpa',
      description:
        'Jeruk Pontianak (citrus nobilis var. microcarpa) merupakan jenis jeruk siam dengan ciri fisik kulitnya tipis dan licin mengkilat. Jeruk Pontianak mempunyai rasa yang manis dan merupakan salah satu komoditas unggulan Kota Pontianak.\nJeruk Pontianak termasuk ke dalam Famili Rutaceae dan Subfamili Aurantiodeae dengan Genus Citrus. Jeruk Pontianak merupakan jenis jeruk siam dengan ciri fisik kulitnya tipis (2 mm), permukaannya halus, licin, dan mengkilap, serta menempel lekat pada daging buahnya. Dasar buahnya berleher pendek dengan puncak berlekuk. Tangkai buahnya pendek dengan panjang sekitar 3 cm dan berdiameter 2.6 mm. Berat tiap buah sekitar 75.6 gram atau ± 13 buah jeruk Pontianak per kilogram, dengan diameter buah rata-rata tiap buah 5 - 6 cm. Biji buahnya berbentuk ovoid, warnanya putih kekuningan dengan ukuran sekitar 0.9 x 0.6 cm, dan jumlah biji per buahnya sekitar 20 biji.\n',
      images: {
        create: [
          {
            url: 'https://dashboard.tumbasin.id/wp-content/uploads/2020/07/pontianak-scaled.jpg',
          },
          {
            url: 'https://cf.shopee.co.id/file/6645b181b792d5b470c331b24ae99bdd',
          },
          {
            url: 'https://id-test-11.slatic.net/p/cceff96e68a6d0768f232da8247097b8.jpg',
          },
          {
            url: 'https://img20.jd.id/Indonesia/amZzL3Q2NC8yMDIvMjM1NTIwMTY3Ny82OTgzNC9hMmYxYjQzNy81ZmI0YWY2MU45OTBiMjgxMA.jpg',
          },
        ],
      },
    },
  });

  const jerukPurut = await prisma.fruit.create({
    data: {
      name: 'Jeruk Purut',
      slug: 'jeruk_purut',
      scientificName: 'Citrus hystrix',
      description:
        'Jeruk purut adalah nama umum dari Citrus hystrix, yaitu buah tropis yang berasal dari berbagai wilayah Asia, termasuk Indonesia, Thailand, dan Filipina. Tumbuhannya berbentuk pohon kecil dengan tinggi antara 2-12 meter. Batangnya bengkok atau bersudut, agak kecil, dan bercabang rendah. Tajuknya tak beraturan. Cabang-cabangnya rapat. Rantingnya berduri, kecil, dan bersudut tajam. Daun berbentuk bulat telur, ujungnya tumpul, dan bertangkai satu.[1] Daunnya itu seperti dua helai yang tersusun vertikal akibat pelekukan tepinya yang ekstrem; tebal dan permukaannya licin, agak berlapis malam. Daun muda dapat berwarna ungu yang kuat. Buahnya kecil, biasanya tidak pernah berdiameter lebih daripada 2cm, membulat dengan tonjolan-tonjolan dan permukaan kulitnya kasar; kulit buah tebal.\nJeruk purut memiliki rasa yang kuat, rasa yang kuat ini disebabkan oleh tingginya konsentrasi alkaloid, sitronelol, limonene, nerol, dan senyawa organik lainnya dalam jeruk purut. Namun ternyata, Jeruk purut tidak hanya memberikan aroma dan rasa yang unik, tetapi juga memiliki berbagai manfaat bagi kesehatan.\nMinyak esensial dari kulit dan daun jeruk purut terbukti bersifat antibakteri. Manfaat jeruk purut ini diduga dapat melawan pathogen penyebab infeksi di saluran pernapasan. Jeruk purut juga mengandung flavonoid dan vitamin C yang merupakan antioksidan. Kandungan antioksidan ini dipercaya dapat memperbaiki sel yang rusak akibat radikal bebas dan bahkan membantu mencegah beberapa penyakit kronis.',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1643545186/attached_image/ternyata-ada-manfaat-jeruk-purut-untuk-kesehatan.jpg',
          },
          {
            url: 'https://asset.kompas.com/crops/VQCoGb1yaJtFtZ-X-53iw75Kppw=/0x0:1000x667/780x390/data/photo/2020/11/03/5fa0f73ade6a8.jpg',
          },
          {
            url: 'http://photo.kontan.co.id/photo/2021/02/01/1333093885p.jpg',
          },
          {
            url: 'https://asset-a.grid.id/crop/0x95:600x535/700x465/photo/2020/11/06/1699342906.jpg',
          },
        ],
      },
    },
  });

  const anggur = await prisma.fruit.create({
    data: {
      name: 'Anggur',
      slug: 'anggur',
      scientificName: 'Vitis vinifera',
      description:
        'Anggur merupakan tanaman buah berupa perdu merambat yang termasuk ke dalam keluarga Vitaceae. Buah ini biasanya digunakan untuk membuat jus anggur, jelly, minuman anggur, minyak biji anggur dan kismis, atau dimakan langsung. Buah ini juga dikenal karena mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya.',
      images: {
        create: [
          {
            url: 'https://cdn1-production-images-kly.akamaized.net/1ByjmJKJ3c77lvL_2zTmKTFPmng=/732x0:2732x2668/640x853/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2955880/original/001098700_1572595650-bunch-cluster-delicious-708777.jpg',
          },
          {
            url: 'https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayobandung/images-bandung/post/articles/2018/02/04/28263/black-grape-3.jpg',
          },
          {
            url: 'https://cf.shopee.co.id/file/d5bae303feb895cf0a99a399aa44db30',
          },
          {
            url: 'https://cdn0-production-images-kly.akamaized.net/cQBnnoFqkkXg1HuSjORo6jxNclA=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1944948/original/066642800_1519792915-Buah_anggur_iStockphoto__3_.jpg',
          },
        ],
      },
    },
  });

  const bluberi = await prisma.fruit.create({
    data: {
      name: 'Bluberi (Blueberry)',
      slug: 'bluberi',
      scientificName: 'Vaccinium sect. Cyanococcus',
      description:
        'Bluberi atau blueberry merupakan tanaman buah yang berasal dari Amerika Utara. Saat ini, blueberry bisa didapatkan di mana saja, termasuk Indonesia. Sesuai dengan namanya, blueberry berwarna biru, dan bentuknya bulat dengan ukuran yang kecil.\nBlueberry dikenal sebagai salah satu buah yang kaya akan vitamin, termasuk vitamin C dan vitamin K. Vitamin C bermanfaat untuk memelihara kesehatan kulit dan menjaga daya tahan tubuh. Sementara itu, vitamin K diketahui bermanfaat untuk mencegah perdarahan dan menjaga kesehatan tulang.Vitamin C pada blueberry juga dapat berfungsi sebagai antioksidan yang bermanfaat untuk mempercepat proses penyembuhan luka.\nSelain vitamin C, antioksidan lain yang terkandung di dalam buah blueberry adalah antosianin dan flavonoid. Antioksidan pada blueberry bermanfaat untuk menjaga kelancaran aliran darah, mencegah terjadinya aterosklerosis, serta mengurangi risiko kanker.',
      images: {
        create: [
          {
            url: 'http://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/05/31/4248093848.jpg',
          },
          {
            url: 'https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/Bluberi.jpg',
          },
          {
            url: 'https://p2.piqsels.com/preview/1015/683/785/berry-blue-blueberry-food.jpg',
          },
          {
            url: 'https://promkes.kemkes.go.id/imagex/content/a6e9b977manfaat-buah-blueberry.jpg',
          },
        ],
      },
    },
  });

  const duku = await prisma.fruit.create({
    data: {
      name: 'Duku',
      slug: 'duku',
      scientificName: 'Lansium Domesticum Corr',
      description:
        'Buah duku yang memiliki nama kimia Lansium Domesticum Corr berasal dari tanaman berkayu yang hidup menahun. Buah duku dapat tubuh subur di daerah beriklim basah dengan curah hujan tinggi. Buah duku mentah berwarna hijau, bergetah dan citarasanya sangat asam. Seiring matangnya buah, kulit akan berubah kekuningan dan daging buah akan berasa manis. Pohon duku ini diperkirakan asli Indonesia, namun ada juga yang menyebutkan bahwa duku berasal dari Asia Tenggara bagian barat. Saat ini buah duku sudah tersebar luas di seluruh wilayah Asia dan menjadi salah satu buah yang menjadi primadona sebagai kategori buah tropis.\nKandungan disetiap 100 gram buah duku mengandung kalori 7.0 kal, protein 1.0 gram, lemak 0.2 gram, karbohidrat 13 gram, mineral 0.7 gram, kalsium 18 mg, fosfor 9 mg dan zat besi 0.9 mg. Untuk kandungan kalori, mineral dan zat besi duku setingkat lebih tinggi dibandingkan dengan buah apel atau jeruk manis. Serat pada buah duku ini sangat bermanfaat untuk memperlancar pencernaan di dalam tubuh kita dan dapat mencegah kanker kolon. Bukan hanya buahnya saja yang memiliki manfaat, namun kulit buah dan biji buah duku yang rasanya pahit ini juga sangat bermanfaat bagi tubuh kita, yaitu dapat menyembuhkan diare dan menurunkan demam. Selain itu, benalu duku juga dapat menghambat reproduksi sel–sel kanker.',
      images: {
        create: [
          {
            url: 'https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2019/02/01/3242699502.jpg',
          },
          {
            url: 'https://cdn0-production-images-kly.akamaized.net/SufsFfC50kP6PlLFErNp18Uen3o=/389x0:1668x1279/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3169766/original/094874000_1593786317-buah-duku-2129810.jpg',
          },
          {
            url: 'https://thumb.viva.co.id/media/frontend/thumbs3/2018/03/08/5aa0f8e780dfc-buah-duku_665_374.jpg',
          },
          {
            url: 'https://assets-a1.kompasiana.com/statics/files/14283931271100903099.jpg',
          },
        ],
      },
    },
  });

  const kelengkeng = await prisma.fruit.create({
    data: {
      name: 'Kelengkeng',
      slug: 'kelengkeng',
      scientificName: 'Dimocarpus longan',
      description:
        'Lengkeng (juga disebut kelengkeng) adalah tanaman buah-buahan yang berasal dari daratan Asia Tenggara. Pohon lengkeng dapat mencapai tinggi 40 m dan diameter batangnya hingga sekitar 1 m. Berdaun majemuk, dengan 2-4(-6) pasang anak daun, sebagian besar berbulu rapat pada bagian aksialnya. Tangkai daun 1–20 cm, tangkai anak daun 0,5-3,5 cm. Anak daun bulat memanjang, panjang lk. 1-5 kali lebarnya, bervariasi 3-45 × 1,5–20 cm, mengertas sampai menjangat, dengan bulu-bulu kempa terutama di sebalah bawah di dekat pertulangan daun.\nBuah bulat, cokelat kekuningan, hampir gundul; licin, berbutir-butir, berbintil kasar atau beronak, bergantung pada jenisnya. Daging buah tipis berwarna putih dan agak bening. Pembungkus biji berwarna cokelat kehitaman, mengilat.\nBuah lengkeng dapat mengatasi stres dan insomnia. Di dalam lengkeng terdapat zat anti depresan yang memberikan efek tenang pada saraf dan mencegah rasa lelah yang berlebih. Manfaat lainnya yaitu kandungan vitamin C nya yang tinggi. Kandungannya memenuhi 93% kebutuhan asupan vitamin C harian.',
      images: {
        create: [
          {
            url: 'https://www.prenagen.com/images/uploads/x1582004710-manfaat-buah-kelengkeng.jpg.pagespeed.ic.ImbN5j16No.jpg',
          },
          {
            url: 'https://asset.kompas.com/crops/pAO1wpDUz_6TbfwuvObVxFeogok=/100x67:900x600/750x500/data/photo/2021/01/18/60057e7699f53.jpg',
          },
          {
            url: 'https://www.monitordepok.co/uploads/images/2020/12/image_750x_5fe968c4d0719.jpeg',
          },
          {
            url: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/02/21043339/Berbagai-Manfaat-Buah-Kelengkeng-dan-Kandungan-Nutrisinya-2.jpg',
          },
        ],
      },
    },
  });

  const leci = await prisma.fruit.create({
    data: {
      name: 'Leci',
      slug: 'leci',
      scientificName: 'Litchi chinensis',
      description:
        'Buah leci atau lici merupakan jenis tanaman buah yang banyak tumbuh di daerah tropis seperti Indonesia. Menurut penjelasan di cybex.pertanian.go.id, leci biasanya tumbuh di daerah dengan ketinggian lebih dari 700 meter di atas permukaan laut (mdpl). Tanaman buah ini bisa tumbuh di musim hujan atau kemarau. Hanya saja suhu udara lingkungan tempat tumbuhnya perlu diperhatikan. Saat musim hujan suhu optimal berkisar 9 – 19 derajat celcius. Sedangkan saat musim kemarau suhu udara terbaik di angka 25 – 33 derajat celsius.\nKandungan vitamin C yang tinggi membuat buah ini dapat memperkuat daya tahan tubuh dan mencegah tubuh terserang penyakit. Konsumsi satu buah leci diketahui bisa memenuhi kebutuhan vitamin C harian sebanyak 9%. Leci mengandung polifenol yang dapat menjaga kesehatan jantung dan kandungan flavonoid yang membantu tubuh terhindar dari risiko kanker.',
      images: {
        create: [
          {
            url: 'https://cdn-cas.orami.co.id/parenting/images/buah_leci_-_britannica.com.width-800.jpg',
          },
          {
            url: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/03/1216081266.jpg',
          },
          {
            url: 'https://cloud.jpnn.com/photo/arsip/normal/2022/02/04/ilustrasi-buah-leci-foto-pixabay-ixgtc-cpng.jpg',
          },
          {
            url: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1619732597/attached_image/6-manfaat-leci-untuk-anak.jpg',
          },
        ],
      },
    },
  });

  const rambutan = await prisma.fruit.create({
    data: {
      name: 'Rambutan',
      slug: 'rambutan',
      scientificName: 'Nephelium lappaceum',
      description:
        'Buah rambutan dihasilkan dari tanaman Nephelium lappaceum, masih satu keluarga dengan kelengkeng, leci dan matoa. Rambutan termasuk dalam buah tropis, diyakini berasal dari Asia Tenggara. Pohon rambutan banyak dibudidayakan di Indonesia, Thailand dan Malaysia.\nBuah rambutan berbentuk bulat warnanya mulai dari hijau, kuning hingga merah. Daging buah berwarna putih cenderung bening. Buah yang telah matang rasanya manis hingga asam manis. Bagian yang bisa dimakan hanya daging buah, sedangkan kulit dan bijinya tidak bisa dimakan.\nKandungan nutrisi yang kaya pada buah rambutan ini menawarkan segudang khasiat yang baik bagi kesehatan. Rambutan termasuk jenis buah yang baik untuk sistem pencernaan. Pasalnya, sekitar setengah daging buah rambutan mengandung serat larut tidak air. Artinya, jenis serat ini tidak menyatu dengan air dan langsung melewati sistem pencernaan. Vitamin C dalam buah rambutan menghasilkan sifat antioksidan dan antibakteri yang dapat melindungi tubuh dari serangan penyakit. Setiap 100 gram buah rambutan mengandung sekitar 104 gram kalium dan hal ini yang membuat buah rambutan mungkin memiliki manfaat bagi tekanan darah.',
      images: {
        create: [
          {
            url: 'https://asset.kompas.com/crops/s91Dmqt0bgOQPCi3QNG9l5aafFE=/0x0:1000x667/750x500/data/photo/2020/12/30/5fec69dc27eb1.jpg',
          },
          {
            url: 'http://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/11/30/3609094881.jpg',
          },
          {
            url: 'https://www.kampustani.com/wp-content/uploads/2020/11/cara-stek-rambutan-binjai-1.jpg',
          },
          {
            url: 'https://cdf.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/manfaat-buah-rambutan.width-800.jpegquality-80.jpg',
          },
        ],
      },
    },
  });

  console.log({ jerukLemon });
  console.log({ jerukMandarin });
  console.log({ jerukNipis });
  console.log({ jerukPontianak });
  console.log({ jerukPurut });
  console.log({ anggur });
  console.log({ bluberi });
  console.log({ duku });
  console.log({ kelengkeng });
  console.log({ leci });
  console.log({ rambutan });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
