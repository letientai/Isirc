import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface SpeakerProps {
  name: string
  topic: string
  description: string
  imageUrl?: string
  buttonText: string
  isPanel?: boolean
  url?: string
}

export const SpeakerCard = ({
  name,
  topic,
  description,
  imageUrl,
  buttonText,
  isPanel,
  url,
}: SpeakerProps) => (
  <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-3xl overflow-hidden">
    <CardContent className="flex flex-col h-full items-center text-center p-8">
      <div
        className={`w-32 h-32 rounded-full mb-6 overflow-hidden bg-gray-400 ${!imageUrl ? 'flex items-center justify-center' : ''}`}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#8a8a8a]" />
        )}
      </div>

      <h3 className="text-red_app font-bold text-xl mb-1">{name}</h3>
      <p className="text-gray-700 font-semibold text-xs mb-4 uppercase tracking-tight">
        {isPanel ? '' : 'Topic: '}
        {topic}
      </p>

      <p className="text-gray-500 text-[13px] leading-relaxed mb-8 line-clamp-6">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-red_app hover:bg-red-700 text-white rounded-full px-6 py-2 shadow-md transition-all"
      >
        {buttonText}
      </a>
    </CardContent>
  </Card>
)
