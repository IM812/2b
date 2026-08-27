import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = { title: 'Контакты — 2В Сервис', description: 'Свяжитесь с 2В Сервис для обсуждения проекта.' }
const CONTACTS=[['Email','info@2v-service.ru','mailto:info@2v-service.ru'],['Телефон','+7 (495) 787-56-15','tel:+74957875615'],['Адрес','Москва, 1-я Миусская, 20, стр. 5',null],['Поддержка','Круглосуточно / 24×7',null]]
export default function ContactsPage(){return <>
<PageHero eyebrow="Контакты" title="Начнём с задачи. Не с презентации." description="Расскажите о контексте — вернёмся с конкретным предложением по подходу, срокам и составу команды." />
<section className="section-pad bg-background"><div className="section-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{CONTACTS.map(([label,value,href],i)=><div key={label} className={`rounded-[2rem] p-6 ${i===0?'bg-primary text-primary-foreground':'bg-secondary'}`}><p className="text-xs font-bold uppercase tracking-widest opacity-50">{label}</p>{href?<a href={href} className="mt-5 block text-xl font-black tracking-tight">{value}</a>:<p className="mt-5 text-xl font-black tracking-tight">{value}</p>}</div>)}</div><ContactForm/></div></section>
<section className="bg-accent py-12 text-accent-foreground"><div className="section-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><p className="eyebrow">Ответим по существу</p><p className="text-3xl font-black tracking-tight">Без длинных брифов и продажи лишнего.</p></div></section>
</>}
