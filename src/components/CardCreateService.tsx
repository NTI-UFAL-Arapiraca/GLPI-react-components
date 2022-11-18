import ButtonSelect from "./ButtonSelect";
import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";

const serviceLocation = ['Bloco A', 'Bloco B', 'Bloco C'];

function CreateService() {
  return (
		<div className='mx-4'>
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
		 			<CardLine />	
		 		</div>
				<form action="" className="">
		 			<div className='flex flex-col gap-9'>
			 			<div className='mx-14'>
			 				<CardLabelInput
			 					label="Título"
			 					type="text"
			 					inputId="title"
			 					width="w-full"	
			 				/>
			 			</div>
						<CardLabelTextarea
							label="Descrição"
							textareaId="description"
						/>
			 			<div className='mx-14'>
						 	<ButtonSelect
								title="LOCAL DO SERVIÇO:"
								placeholder="Local do serviço"
								listSelectButton={serviceLocation}
								className="block px-2.5 pb-2.5 pt-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
								max-h-11 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
								triggerWidth="w-full"
							/>
			 			</div>
			 		</div>
			 	</form>
			 	<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
			 		<Button
			 			title="Solicitar"
			 			theme="primaryAction"
			 		/>
			 		<Button
			 			title="Cancelar"
			 			theme="secondaryAction"
			 		/>
			 	</div>
			</div>
		</div>
	);
}

export default CreateService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões