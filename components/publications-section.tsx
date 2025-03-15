import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PUBLICATIONS_DATA } from "@/lib/data"

export default function PublicationsSection() {
  return (
    <div id="publications">
      <h1 className="font-instrument text-3xl md:text-4xl mb-8">Publications</h1>

      <div className="space-y-6">
        {PUBLICATIONS_DATA.map((publication, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white rounded-xl sm:rounded-full p-4 border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:border-neutral-200"
          >
            <div className={`w-10 h-10 flex items-center justify-center bg-${publication.iconColor}-50 rounded-full shrink-0`}>
              <span className={`font-bold text-xl text-${publication.iconColor}-600`}>{publication.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="font-medium">{publication.title}</p>
                  {publication.publisher && (
                    <p className="text-neutral-600 text-sm md:text-base break-words">{publication.publisher}</p>
                  )}
                  {!publication.publisher && publication.url && (
                    <p className="text-neutral-600 text-sm md:text-base break-words">{publication.url}</p>
                  )}
                </div>
                <Link 
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-blue-600 transition-colors mt-2 sm:mt-0"
                >
                  <p className="text-neutral-500 text-sm group-hover:text-blue-600 transition-colors">{publication.date}</p>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}