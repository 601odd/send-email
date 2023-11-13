import styles from '@/app/page.module.css'
import { sendMail, compileTemplate } from '@/lib/mail'
export default function Home() {
	const send = async () => {
		'use server'
		console.log('已发送')
		await sendMail({
			to: 'oxy601@126.com',
			name: 'odd text email',
			subject: 'Test Mail',
			body: compileTemplate('oddpro', 'https://juejin.cn/user/831701770570621'),
		})
	}
	return (
		<>
			<main className={styles.main}>
				<form>
					<button className={styles.btn} formAction={send}>
						click to send mail
					</button>
				</form>
			</main>
		</>
	)
}
