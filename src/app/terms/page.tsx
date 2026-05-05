import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan penggunaan website dan layanan PT Comon Cipta Inovasi (Devetek).',
}

export default function TermsPage() {
  return (
    <main className="pt-24">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            Syarat & Ketentuan
          </h1>
          <p className="mt-2 text-sm text-text-muted">Terakhir diperbarui: 1 Mei 2026</p>

          <div className="mt-10 prose prose-slate max-w-none">
            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">1. Ketentuan Umum</h2>
            <p className="text-text-body leading-relaxed">
              Dengan mengakses website devetek.com, Anda menyetujui untuk terikat dengan syarat dan ketentuan ini. Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, mohon untuk tidak menggunakan website kami.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">2. Layanan</h2>
            <p className="text-text-body leading-relaxed">
              PT Comon Cipta Inovasi menyediakan layanan pengembangan perangkat lunak, sistem IoT, konsultasi IT, dan pengadaan barang teknologi. Detail layanan dan ruang lingkup akan diatur dalam perjanjian terpisah antara perusahaan dan klien.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">3. Hak Kekayaan Intelektual</h2>
            <p className="text-text-body leading-relaxed">
              Seluruh konten di website ini termasuk teks, grafis, logo, ikon, gambar, dan perangkat lunak merupakan hak milik PT Comon Cipta Inovasi dan dilindungi oleh undang-undang hak cipta Indonesia.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Dilarang menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis</li>
              <li>Logo dan merek dagang Devetek, D-IBS, D-ASSET, dan HELIOS adalah milik PT Comon Cipta Inovasi</li>
              <li>Penggunaan konten untuk keperluan non-komersial dan edukasi diperbolehkan dengan atribusi</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">4. Batasan Tanggung Jawab</h2>
            <p className="text-text-body leading-relaxed">
              Informasi di website ini disediakan &ldquo;sebagaimana adanya&rdquo;. Kami berusaha menjaga keakuratan informasi namun tidak menjamin kelengkapan atau keakuratan mutlak. PT Comon Cipta Inovasi tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Kerugian yang timbul dari penggunaan informasi di website</li>
              <li>Gangguan layanan atau error teknis pada website</li>
              <li>Konten pihak ketiga yang ditautkan dari website kami</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">5. Penggunaan Website</h2>
            <p className="text-text-body leading-relaxed">Pengguna dilarang:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Menggunakan website untuk tujuan ilegal</li>
              <li>Mencoba mengakses sistem atau data secara tidak sah</li>
              <li>Mengirimkan konten berbahaya (virus, malware, dsb.)</li>
              <li>Melakukan scraping atau pengambilan data secara otomatis tanpa izin</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">6. Tautan Eksternal</h2>
            <p className="text-text-body leading-relaxed">
              Website kami mungkin berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas konten atau praktik privasi situs tersebut.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">7. Perubahan Ketentuan</h2>
            <p className="text-text-body leading-relaxed">
              Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Penggunaan berkelanjutan atas website setelah perubahan berarti Anda menyetujui ketentuan yang diperbarui.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">8. Hukum yang Berlaku</h2>
            <p className="text-text-body leading-relaxed">
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui musyawarah, dan apabila tidak tercapai kesepakatan, akan diselesaikan di Pengadilan Negeri Cibinong.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">9. Kontak</h2>
            <p className="text-text-body leading-relaxed">
              Untuk pertanyaan terkait syarat dan ketentuan ini:
            </p>
            <ul className="list-none space-y-1 text-text-body mt-3">
              <li><strong>PT Comon Cipta Inovasi</strong></li>
              <li>Komplek Meranti No. 3, RT.01/RW.02, Pasir Jaya, Bogor Barat, Kota Bogor, Jawa Barat 16119</li>
              <li>Email: info@devetek.com</li>
              <li>Telepon: 0856 230 2229</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
