import React, { useState } from 'react'
import Information from '../components/Information'

const Accordion = () => {
  const [sliderOpen, setSliderOpen] = useState(false)
  const [informationOpen, setInformationOpen] = useState(false)

  return (
    <div className="accordion">
      <div>
        <div className="container">
          <div
            className="accordion__heading"
            onClick={() => setSliderOpen(!sliderOpen)}
          >
            <div className="accordion__title">Lorem ipsum dolor sit amet</div>
            <div
              className={`accordion__chevron ${
                sliderOpen ? 'accordion__chevron--active' : ''
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div
          className={`accordion__content ${
            sliderOpen ? 'accordion__content--active' : ''
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          incidunt deserunt iure minima amet, quaerat dicta, cumque consectetur
          vitae, aliquam ipsa numquam adipisci eligendi optio quo hic! Aperiam
          adipisci dicta tempora odio eaque doloremque natus architecto
          perspiciatis nisi, cupiditate repellendus est assumenda ex eligendi
          sit? Repudiandae vitae dignissimos consequatur adipisci maiores
          incidunt perferendis natus, ex distinctio recusandae ipsum dolorum aut
          nesciunt temporibus aspernatur iste. Porro necessitatibus aliquam
          error illum qui quo, quae ea enim soluta aspernatur natus dicta
          voluptatum reiciendis maxime facilis ab corporis sunt earum laudantium
          autem tempore fugiat facere. Provident quibusdam molestias rerum odio
          voluptatum sint minima corrupti doloremque distinctio mollitia soluta
          neque, vitae non porro corporis delectus facilis. Obcaecati corporis
          adipisci blanditiis. Aspernatur ratione cupiditate incidunt quo vero
          nesciunt! Repellat adipisci non earum amet saepe dolores, iste facilis
          nam. Debitis quisquam dolor obcaecati tempore ad ullam quis error
          fugiat esse. Error dolorem facilis illo ullam autem illum quos facere
          eius nobis odit, officiis doloremque eligendi quis accusantium
          praesentium dicta porro libero quasi saepe optio id? Illum itaque
          accusantium porro alias architecto quae. Voluptate unde nulla sed
          suscipit quaerat animi enim eaque eos quibusdam ipsam deleniti
          accusantium vel, quod incidunt aut minima veritatis dolorem placeat a,
          quasi ad! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae temporibus voluptate possimus optio laboriosam! Nisi quaerat
          dicta totam dolores assumenda unde enim incidunt maxime, ut veritatis,
          facilis voluptatum officiis debitis ipsa nihil odit dolorum amet ex
          eos nam mollitia non ullam provident doloribus! Illum iste, error
          sapiente eligendi earum odit ipsa unde exercitationem dicta reiciendis
          cum sequi explicabo, dignissimos expedita nisi et eos nobis eveniet
          adipisci dolorem, temporibus modi natus beatae tempore. Suscipit
          quidem necessitatibus ratione quos nulla quasi repudiandae cumque
          consequuntur tenetur, harum incidunt deserunt est, numquam quis.
          Quisquam at laboriosam quibusdam placeat facere excepturi cupiditate
          voluptatem tenetur fugiat dolorem ad ex, voluptates pariatur delectus
          temporibus ipsam cum eaque, perspiciatis ullam molestias voluptatibus!
          Ut alias earum, nulla est cum sapiente quam voluptas molestias
          perferendis! Voluptatem illum nulla eum eos possimus? Perspiciatis
          voluptatum ea tenetur assumenda, eum officiis rerum aliquid esse
          dolorem hic doloremque minima ad animi cupiditate reprehenderit nemo
          soluta quidem, vero itaque voluptate repellat quis iure. Deleniti
          molestias, possimus dolore fugiat vitae saepe consequuntur distinctio
          eaque velit dolores ipsam iusto, quos magni, non repellendus hic
          consectetur. Ut voluptatibus asperiores quidem voluptate, itaque
          expedita odio error nesciunt ex quam quae ratione? Magnam nesciunt
          laborum corporis fugit. Iure vitae consectetur nesciunt perferendis
          dicta nulla quas tempora ipsa accusamus recusandae tenetur fugiat,
          officiis doloremque laboriosam quaerat rerum cum et. Commodi dolore
          hic quae officiis nisi ipsum ratione possimus in quibusdam et corrupti
          deleniti consectetur eum odio vitae explicabo, voluptatum, saepe
          repellat. Inventore in maiores soluta fuga voluptates quibusdam neque
          est, nam nobis suscipit iure et cum sunt ullam qui? Molestias laborum
          ut minima blanditiis ab pariatur! Ab corrupti magnam consectetur
          corporis dolores at amet nam obcaecati eum provident perspiciatis
          laboriosam quam nobis eligendi debitis, cupiditate libero mollitia
          repellat dolorum earum voluptas, distinctio, nostrum incidunt
          assumenda! Tenetur pariatur laborum eaque odit blanditiis!
        </div>
      </div>
      <div>
        <div className="container">
          <div
            className="accordion__heading"
            onClick={() => setInformationOpen(!informationOpen)}
          >
            <div className="accordion__title">Lorem ipsum dolor sit amet</div>
            <div
              className={`accordion__chevron ${
                informationOpen ? 'accordion__chevron--active' : ''
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div
          className={`accordion__content ${
            informationOpen ? 'accordion__content--active' : ''
          }`}
        >
          <div className="container-left">
            <Information />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
