export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/form/success">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Nome
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="name" />
					</label>
				</p>

				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Tipologia di servizio
							<select	class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required name="type">
								<option disabled="" value="">Seleziona una tipologia</option>
								<option value="salute">👩‍⚕️ Salute</option>
								<option value="artigianato">🎨Artigianato</option>
								<option value="gelaterie">🍦Gelateria</option>
								<option value="macellerie">🥩Macelleria</option>
								<option value="panifici">🍞Panifici</option>
								<option value="pub">🍔Pub</option>
								<option value="librerie">🕮Librerie</option>
								<option value="generi alimentari">🥬Generi Alimentari</option>
								<option value="pesce fresco e surgelato">🍣Pesce Fresco/Surgelato</option>
								<option value="elettronica_elettrodomestici">📺Elettronica/Elettrodomestici</option>
								<option value="ristorazione">🍽️Ristorazione</option>
								<option value="enoteca e birre">🍾Enoteca e Birre</option>
								<option value="frutta fresca">🍎Frutta Fresca</option>
								<option value="supermercati">🛒Supermercati</option>
								<option value="pasticceria">🍩Pasticceria</option>
								<option value="pizzerie">🍕Pizzeria</option>
								<option value="lavanderie">👔Lavanderia</option>
								<option value="informatica">👨‍💻Informatica</option>
								<option value="prodotti e servizi per animali">🐶Prodotti per Animali</option>
							</select>
						</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Numero di telefono
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" required inputmode="numeric" name="telephone" />
					</label>
				</p>
				<p class="my-5">
               <label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Email (facoltativa)
                  <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" name="mail" />
               </label>
            </p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Sito Web (facoltativo)
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="site" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Note (Prodotti specifici, orari di consegna, metodi di pagamento ecc.)
						<textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="note" />
					</label>
				</p>
				<p class="my-5">
					<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Invia la richiesta</button>
				</p>
			</form>
		</div>
	);
}
