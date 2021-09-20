import { useState } from "react"

export default function useMode(){
    const [mode, setMode] = useState<'table' | 'form'>('table')

    const displayTable = () => setMode('table')
    const displayForm = () => setMode('form')

    return {
        formVisible: mode === 'form',
        tableVisible: mode === 'table',
        displayForm,
        displayTable
    }
}