import type { Metadata } from 'next'

const path = '/tseny-it-obsluzhivaniya/'
export const metadata: Metadata = {
  title: 'Цены на IT-услуги | 2BService - профессиональная IT-поддержка бизнеса',
  description: 'Цены на ИТ-обслуживание, поддержку инфраструктуры и разовые работы для бизнеса',
  alternates: { canonical: path },
}

const serverRows = [
  ['Сопровождение UNIX-систем, руб/мес', '3 000'], ['Сопровождение WINDOWS-систем, руб/мес', '3 000'],
  ['Мониторинг ресурсов 24 × 7, руб/мес', '2 500'], ['Сопровождение дискового массива, руб/мес', '3 500'],
  ['Резервное копирование, руб/мес', '2 500'], ['Инсталляция и настройка серверного оборудования', '6 500'],
]
const supportRows = [
  ['От 1 до 15 рабочих мест', '700', '900', '1 100', '1 300'],
  ['От 16 до 20 рабочих мест', '630', '810', '990', '1 270'],
  ['Более 20 рабочих мест', 'Индивидуально', 'Индивидуально', 'Индивидуально', 'Индивидуально'],
]
const oneTimeRows = [
  ['Удаленное администрирование, руб/час', '1 350'], ['Разовый выезд администратора, руб/час', '1 550'],
  ['День работы специалиста', '9 000'], ['Диагностика компьютера или ноутбука', '1 000'],
  ['Установка и настройка Windows', '2 000'], ['Установка и настройка Mac OS', '2 000'],
  ['Поиск и удаление вирусов', '1 500'], ['Чистка от пыли и профилактика', '1 000'],
]
const dataCenterRows = [
  ['Аренда 1U в стойке, руб/мес', '3 000'], ['Дополнительное питание 100 Вт, руб/мес', '700'],
  ['Канал 100 Мбит/с, руб/мес', '9 570'], ['Дополнительный IP-адрес, руб/мес', '120'],
  ['Подключение к IP-KVM', '3 000'], ['Защита от DDoS-атак', '6 396'],
]

function PriceTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="mt-7 overflow-x-auto rounded-2xl border border-border"><table className="w-full min-w-[42rem] border-collapse text-left text-sm"><thead className="bg-secondary"><tr>{headers.map((header) => <th key={header} className="border-b border-border px-5 py-4 font-bold">{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.join('-')} className="border-b border-border last:border-0">{row.map((cell, index) => <td key={`${cell}-${index}`} className={`px-5 py-4 ${index ? 'font-semibold' : 'text-muted-foreground'}`}>{cell}</td>)}</tr>)}</tbody></table></div>
}

export default function PricesPage() {
  return <>
    <header className="max-h-[700px] bg-surface pb-14 pt-28 text-surface-foreground sm:pb-20 sm:pt-36"><div className="section-shell"><p className="eyebrow text-primary">Услуги / цены</p><h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Цены на IT-услуги</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-surface-foreground/65">Актуальные варианты стоимости ИТ-обслуживания, разовых работ и услуг дата-центра. Итоговое предложение рассчитывается с учетом инфраструктуры, нагрузки и требований к безопасности.</p></div></header>
    <main className="section-pad bg-background"><div className="section-shell max-w-6xl"><section><h2 className="section-title">Стоимость обслуживания серверов</h2><PriceTable headers={['Услуга', 'Стоимость']} rows={serverRows} /></section><section className="mt-16"><h2 className="section-title">План абонентского обслуживания</h2><PriceTable headers={['Количество рабочих мест', 'Удаленный', 'Легкий', 'Оптимальный', 'VIP']} rows={supportRows} /></section><section className="mt-16"><h2 className="section-title">Разовые ИТ-услуги</h2><PriceTable headers={['Услуга', 'Цена, руб.']} rows={oneTimeRows} /></section><section className="mt-16"><h2 className="section-title">Дата-центр и связь</h2><PriceTable headers={['Услуга', 'Цена']} rows={dataCenterRows} /></section><div className="mt-12 rounded-2xl bg-secondary p-6 text-sm leading-relaxed text-muted-foreground"><p>Цены на сайте не являются публичной офертой. Запчасти и расходные материалы в стоимость не входят. Работы в выходные и праздничные дни согласовываются отдельно.</p></div></div></main>
  </>
}
