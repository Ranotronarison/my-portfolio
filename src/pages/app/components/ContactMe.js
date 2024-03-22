export default function ContactMe() {
	return <>
		<div className="md:container mx-auto px-2 md:px-16">
			<h3 className="section-title">{'{ Contact me }'}</h3>
			<form action="#" className="space-y-8 mx-auto w-1/2">
				<div className="w-full">
					<input className="w-full rounded-sm p-2" type="text" placeholder="Email" />
				</div>
				<div className="w-full">
					<textarea className="w-full rounded-sm p-2" placeholder="Your message" />
				</div>
				<button className="rounded-full bg-neutral-950 py-2 px-5 text-white hover:bg-neutral-800 text-base text-center focus:ring-2 focus:ring-neutral-400">Submit</button>
			</form>
		</div>
	</>
}