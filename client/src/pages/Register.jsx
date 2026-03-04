import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from 'src/contexts/ModalContext'
import { useNotification } from 'src/contexts/NotificationContext'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import ConfirmForm from 'src/components/ConfirmForm'
import 'src/assets/styles/form.css'

export default function Register() {

    const [ formData, setFormData ] = useState({ firstname: '', lastname: '', username: '', email: '', password: '' })
    const [ confirm, setConfirm ] = useState('')
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    
    const { openModal, closeModal } = useModal()
    const { showNotification } = useNotification()

    const handleChange = (e) => {
        if (e.target.name === 'confirmPassword') setConfirm(e.target.value)
        else setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCancel = (e) => {
        setFormData({ firstname: '', lastname: '', username: '', email: '', password: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== confirm) {
            showNotification("Les mots de passe ne correspondent pas")
            closeModal()
            return
        }
        try {
            const response = await fetch('https://localhost:3000/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
            const data = await response.json()
            if (response.ok) showNotification("Inscription réussie !", "success")
            else showNotification(data.message || "Erreur lors de l'inscription")
        } catch (error) {
            showNotification("Erreur réseau impossible de joindre le serveur")
        }
    }

    const handleClose = () => {
        setConfirm('')
        setIsModalOpen(false)
        closeModal()
    }

    const confirmModal = () => {
        if (!isModalOpen) return
        openModal('Confirmation du mot de passe', ConfirmForm, { value: confirm, onChange: handleChange, onCancel: handleClose }, handleSubmit, handleClose)
    }

    const handleModal = (e) => {
        e.preventDefault()
        setIsModalOpen(true)
    }
    
    useEffect(() => confirmModal(), [confirm, isModalOpen])

    return (

        <>

            <form className='form-container register' method="post" onSubmit={handleModal}>
                {['firstname', 'lastname', 'username', 'email', 'password'].map(field => (
                    <Input key={field} type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'} label={field} value={formData[field]} onChange={handleChange} />
                ))}
                <div className="buttons">
                    {['cancel', 'register'].map(field => (
                        <Button key={field} type={field === 'register' ? 'submit' : 'button'} label={field} onClick={field === 'cancel' ? handleCancel : undefined} />
                    ))}
                </div>
            </form>

            <div className="navigation">
                <p>Vous avez déjà un compte ?</p>
                <Link to="/login" className='login-link'>Se connecter</Link>
            </div>
        
        </>

    )

}