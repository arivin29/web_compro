import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'
import { COMPANY, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi PT Comon Cipta Inovasi (Devetek) mengenai pengumpulan dan penggunaan data.',
}

const UPDATED = '1 Mei 2026'

/**
 * Halaman legal — blueprint §18.
 *
 * Memakai `width="prose"` (68 karakter per baris) dan `.prose-devetek`
 * untuk gaya teks panjang. Tidak memakai `CTASection`: tidak pantas
 * menjual di halaman kebijakan.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Kebijakan Privasi"
        description={`Terakhir diperbarui ${UPDATED}.`}
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Kebijakan Privasi' }]}
      />

      <Section tone="white" width="prose">
        <div className="prose-devetek">
          <section>
            <h2>1. Pendahuluan</h2>
            <p>
              {COMPANY.name} (&ldquo;Devetek&rdquo;, &ldquo;kami&rdquo;) menghargai privasi Anda.
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
              informasi pribadi Anda saat menggunakan website dan layanan kami.
            </p>
          </section>

          <section>
            <h2>2. Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi berikut:</p>
            <ul>
              <li>Nama lengkap, email, dan nomor telepon melalui formulir kontak</li>
              <li>Informasi perusahaan dan kebutuhan layanan</li>
              <li>Data penggunaan website melalui cookies dan analytics</li>
              <li>Alamat IP dan informasi perangkat</li>
            </ul>
          </section>

          <section>
            <h2>3. Penggunaan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan untuk:</p>
            <ul>
              <li>Merespons pertanyaan dan permintaan konsultasi</li>
              <li>Memberikan layanan yang diminta</li>
              <li>Mengirim informasi terkait produk dan layanan kami</li>
              <li>Meningkatkan pengalaman pengguna di website</li>
              <li>Menganalisis penggunaan website untuk perbaikan layanan</li>
            </ul>
          </section>

          <section>
            <h2>4. Perlindungan Data</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi
              pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran.
              Data disimpan di server yang aman dengan enkripsi standar industri.
            </p>
          </section>

          <section>
            <h2>5. Berbagi Informasi</h2>
            <p>
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada
              pihak ketiga. Kami dapat membagikan informasi hanya dalam keadaan berikut:
            </p>
            <ul>
              <li>Dengan persetujuan Anda</li>
              <li>Untuk memenuhi kewajiban hukum</li>
              <li>Kepada penyedia layanan tepercaya yang membantu operasional kami</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Website kami menggunakan cookies untuk meningkatkan pengalaman menjelajah. Anda dapat
              mengatur preferensi cookies melalui pengaturan browser Anda.
            </p>
          </section>

          <section>
            <h2>7. Hak Anda</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul>
              <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menolak penggunaan data untuk tujuan pemasaran</li>
            </ul>
          </section>

          <section>
            <h2>8. Menghubungi Kami</h2>
            <p>
              Pertanyaan tentang kebijakan ini dapat dikirim ke{' '}
              <a href={`mailto:${CONTACT.email.general}`}>{CONTACT.email.general}</a> atau{' '}
              <a href={`tel:+${CONTACT.whatsapp.number}`}>{CONTACT.whatsapp.display}</a>. Alamat
              surat menyurat tercantum pada bagian bawah setiap halaman.
            </p>
          </section>
        </div>
      </Section>
    </>
  )
}
