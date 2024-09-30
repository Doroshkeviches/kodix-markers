'use client'

import { Switch } from "../ui/switch"


interface Props {
    isEditMode: boolean,
    setIsEditMode: (v: boolean) => void
}

function SwitchWrapper(props: Props) {
    const { isEditMode, setIsEditMode } = props

    return (
        <div className="flex flex-row justify-end">
        <div className='flex flex-row justify-between p-10 gap-10 items-center w-96'>
            <Switch
                checked={isEditMode}
                onCheckedChange={(сhecked: boolean) => setIsEditMode(сhecked)}
            />
            <p>Режим редактирования {isEditMode ? 'включен' : 'выключен'}</p>
        </div>

        </div>
    )
}

export default SwitchWrapper
