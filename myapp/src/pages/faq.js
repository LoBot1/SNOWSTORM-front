import '../style/faq.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';




function Faq() {
    return (
      <>
      <div className='title'>
      </div>
        <div className="dropdown">
          <div className='firstone'>
            <DropdownButton
              key='end'
              drop='down-centered'
              variant="secondary"
              title='Avec quelles marques collaborez vous pour vos claviers ?' >
                
                <div className='answer'> 
                    <Dropdown.Item>
                      Nous collaborons avec ... une marque reconnue pour sa qualité et qui permet une grande modularité des touches. Pour les touches personnalisées nous sommes en collaboration avec ... .
                    </Dropdown.Item>

                  </div>
                </DropdownButton>
              </div>

              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title='Mon produit est commandé comment savoir quand il arrive ?'
              >
                <div className='answer'> 
                <Dropdown.Item>Un mail permettant le suivi du colis vous a été envoyé par notre prestataire qui s'occupe des livraisons.</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title='Doit on installer un logiciel tier au branchement du clavier ?'
              >
                <div className='answer'> 
                <Dropdown.Item>Pour une personnalisation optimale un logiciel est requis lors de l'utilisation du clavier celui- ci sera détaillé dans la notice propre au clavier.</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title='J`aimerais pouvoir changer la customisation une fois le clavier reçu c`est possible?'
              >
                <div className='answer'> 
                <Dropdown.Item>OUI , les claviers sont entièrement modulable.</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title="J'ai un problème avec ma commande: comment contacter le service client?"
              >
                <div className='answer'> 
                <Dropdown.Item>Le service client est contactable ici une réponse vous sera envoyée le jour même.</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title="J'aimerais annuler ma commande comment faire?"
              >
                <div className='answer'> 
                <Dropdown.Item>aller dans annulé!!!!!!!</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title='Puis-je me faire rembourser si le produit ne me convient pas?'
              >
                <div className='answer'> 
                <Dropdown.Item>Veuillez contacter le service client ici afin de décrire votre problèmes plus en détail.</Dropdown.Item>
                </div>
              </DropdownButton>


              <DropdownButton
                key='end'
                drop='down-centered'
                variant="secondary"
                title="Comment utiliser un bon d'achat ou un code promo?"
              >
                <div className='answer'> 
                <Dropdown.Item>Au moment du paiement vous pouvez entrer dans la section “J'ai un code” votre code promotionnel ou bon d'achat.</Dropdown.Item>
                </div>
              </DropdownButton>
        </div>
  
        
      </>
    );
  }
  
  export default Faq;