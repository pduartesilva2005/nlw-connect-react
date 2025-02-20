import Image from 'next/image'
import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative not-last-of-type:rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Pedro Duarte
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={gold}
            alt="Medalha de ouro"
            className="absolute top-0 right-0"
          />
        </div>

        <div className="relative not-last-of-type:rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | John Doe
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            940
          </span>

          <Image
            src={silver}
            alt="Medalha de prata"
            className="absolute top-0 right-0"
          />
        </div>

        <div className="relative not-last-of-type:rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Bill Grinn
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            790
          </span>

          <Image
            src={cooper}
            alt="Medalha de Bronze"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  )
}
