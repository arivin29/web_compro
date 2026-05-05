import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi PT Comon Cipta Inovasi (Devetek) mengenai pengumpulan dan penggunaan data.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            Kebijakan Privasi
          </h1>
          <p className="mt-2 text-sm text-text-muted">Terakhir diperbarui: 1 Mei 2026</p>

          <div className="mt-10 prose prose-slate max-w-none">
            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">1. Pendahuluan</h2>
            <p className="text-text-body leading-relaxed">
              PT Comon Cipta Inovasi (&ldquo;Devetek&rdquo;, &ldquo;kami&rdquo;) menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan website dan layanan kami.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p className="text-text-body leading-relaxed">Kami dapat mengumpulkan informasi berikut:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Nama lengkap, email, dan nomor telepon melalui formulir kontak</li>
              <li>Informasi perusahaan dan kebutuhan layanan</li>
              <li>Data penggunaan website (melalui cookies dan analytics)</li>
              <li>Alamat IP dan informasi perangkat</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">3. Penggunaan Informasi</h2>
            <p className="text-text-body leading-relaxed">Informasi yang dikumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Merespon pertanyaan dan permintaan konsultasi</li>
              <li>Memberikan layanan yang diminta</li>
              <li>Mengirim informasi terkait produk dan layanan kami</li>
              <li>Meningkatkan pengalaman pengguna di website</li>
              <li>Analisis penggunaan website untuk perbaikan layanan</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">4. Perlindungan Data</h2>
            <p className="text-text-body leading-relaxed">
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Data disimpan di server yang aman dengan enkripsi standar industri.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">5. Berbagi Informasi</h2>
            <p className="text-text-body leading-relaxed">
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami dapat membagikan informasi hanya dalam keadaan berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Dengan persetujuan Anda</li>
              <li>Untuk memenuhi kewajiban hukum</li>
              <li>Kepada penyedia layanan terpercaya yang membantu operasional kami</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">6. Cookies</h2>
            <p className="text-text-body leading-relaxed">
              Website kami menggunakan cookies untuk meningkatkan pengalaman browsing. Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">7. Hak Anda</h2>
            <p className="text-text-body leading-relaxed">Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-body mt-3">
              <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menolak penggunaan data untuk tujuan pemasaran</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-brand-dark mt-8 mb-4">8. Kontak</h2>
            <p className="text-text-body leading-relaxed">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui:
            </p>
            <ul className="list-none space-y-1 text-text-body mt-3">
              <li><strong>Email:</strong> info@devetek.com</li>
              <li><strong>Telepon:</strong> 0856 230 2229</li>
              <li><strong>Alamat:</strong> Komplek Meranti No. 3, RT.01/RW.02, Pasir Jaya, Bogor Barat, Kota Bogor, Jawa Barat 16119</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
