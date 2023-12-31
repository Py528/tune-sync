'use client';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Library = () => {
	const onClick = () => {
		//handle upload later
	};

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist
						size={26}
						className="text-neutral-400 "
					/>
					<p className="text-neutral-400 font-medium text-md">You Library</p>
				</div>
				<AiOutlinePlusCircle
					size={20}
					className="text-neutral-400 cursor-pointer hover:text-white transition"
					onClick={onClick}
				/>
			</div>
			<div className="flex flex-col gap-y-2 px-3 mt-4">List of songs</div>
		</div>
	);
};

export default Library;
