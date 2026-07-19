const LABELS = {
  os: 'OS',
  cpu: 'Processor',
  ram: 'Memory',
  gpu: 'Graphics',
  storage: 'Storage',
  directx: 'DirectX'
}

export default function RequirementsTable({ requirements }) {
  const rows = Object.entries(requirements).filter(([, value]) => value && value !== 'N/A')

  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([key, value], i) => (
            <tr key={key} className={i % 2 === 0 ? 'bg-panel' : 'bg-panel2'}>
              <th scope="row" className="w-36 px-4 py-3 text-left font-medium text-neonblue">
                {LABELS[key] || key}
              </th>
              <td className="px-4 py-3 text-mist">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
