import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'
import { COMPANY, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description:
    'Syarat dan ketentuan penggunaan website dan layanan PT Comon Cipta Inovasi (Devetek).',
}

const UPDATED = '1 Mei 2026'

/** Halaman legal — lihat catatan pada src/app/privacy-policy/page.tsx. */
export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Syarat &amp; Ketentuan"
        description={`Terakhir diperbarui ${UPDATED}.`}
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Syarat & Ketentuan' }]}
      />

      <Section tone="white" width="prose">
        <div className="prose-devetek">
          <section>
            <h2>1. Ketentuan Umum</h2>
            <p>
              Dengan mengakses website ini, Anda menyetujui untuk terikat dengan syarat dan
              ketentuan berikut. Jika Anda tidak menyetujui salah satu bagiannya, mohon untuk
              tidak menggunakan website kami.
            </p>
          </section>

          <section>
            <h2>2. Layanan</h2>
            <p>
              {COMPANY.name} menyediakan layanan pengembangan perangkat lunak, sistem IoT,
              konsultasi IT, dan pengadaan barang teknologi. Detail layanan dan ruang lingkupnya
              diatur dalam perjanjian terpisah antara perusahaan dan klien.
            </p>
          </section>

          <section>
            <h2>3. Hak Kekayaan Intelektual</h2>
            <p>
              Seluruh konten di website ini — termasuk teks, grafis, logo, ikon, gambar, dan
              perangkat lunak — merupakan hak milik {COMPANY.name} dan dilindungi undang-undang
              hak cipta Republik Indonesia.
            </p>
            <ul>
              <li>Dilarang menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis</li>
              <li>
                Logo dan merek dagang Devetek, D-IBS, D-ASSET, serta HELIOS adalah milik{' '}
                {COMPANY.name}
              </li>
              <li>
                Penggunaan konten untuk keperluan non-komersial dan edukasi diperbolehkan dengan
                atribusi
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Batasan Tanggung Jawab</h2>
            <p>
              Informasi di website ini disediakan &ldquo;sebagaimana adanya&rdquo;. Kami berusaha
              menjaga keakuratan informasi, namun tidak menjamin kelengkapan atau keakuratan
              mutlaknya. {COMPANY.name} tidak bertanggung jawab atas:
            </p>
            <ul>
              <li>Kerugian yang timbul dari penggunaan informasi di website</li>
              <li>Gangguan layanan atau kesalahan teknis pada website</li>
              <li>Konten pihak ketiga yang ditautkan dari website kami</li>
            </ul>
          </section>

          <section>
            <h2>5. Penggunaan Website</h2>
            <p>Pengguna dilarang:</p>
            <ul>
              <li>Menggunakan website untuk tujuan ilegal</li>
              <li>Mencoba mengakses sistem atau data secara tidak sah</li>
              <li>Mengirimkan konten berbahaya seperti virus atau malware</li>
              <li>Melakukan pengambilan data secara otomatis tanpa izin</li>
            </ul>
          </section>

          <section>
            <h2>6. Tautan Eksternal</h2>
            <p>
              Website kami mungkin memuat tautan ke situs pihak ketiga. Kami tidak bertanggung
              jawab atas konten maupun praktik privasi situs tersebut.
            </p>
          </section>

          <section>
            <h2>7. Perubahan Ketentuan</h2>
            <p>
              Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan berlaku
              segera setelah dipublikasikan di halaman ini. Penggunaan website secara berkelanjutan
              setelah perubahan berarti Anda menyetujui ketentuan yang diperbarui.
            </p>
          </section>

          <section>
            <h2>8. Hukum yang Berlaku</h2>
            <p>
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai hukum Republik Indonesia.
              Setiap sengketa diselesaikan melalui musyawarah, dan apabila tidak tercapai
              kesepakatan, akan diselesaikan di Pengadilan Negeri Cibinong.
            </p>
          </section>

          <section>
            <h2>9. Menghubungi Kami</h2>
            <p>
              Pertanyaan terkait ketentuan ini dapat dikirim ke{' '}
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
