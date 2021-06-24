    public class ValorFechaHora implements Writable {&#xD;&#xA;    	private IntWritable Medicion;&#xD;&#xA;    	private Text Fecha;&#xD;&#xA;    	private Text Hora;&#xD;&#xA;    	&#xD;&#xA;    	public void ValorFechaHora(){&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	public void ValorFechaHora(IntWritable Medicion, Text Fecha, Text Hora){&#xD;&#xA;    		setMedicion(Medicion);&#xD;&#xA;    		setFecha(Fecha);&#xD;&#xA;    		setHora(Hora);&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	public IntWritable getMedicion() {&#xD;&#xA;    		return Medicion;&#xD;&#xA;    	}&#xD;&#xA;    	public void setMedicion(IntWritable medicion) {&#xD;&#xA;    		Medicion = medicion;&#xD;&#xA;    	}&#xD;&#xA;    	public Text getFecha() {&#xD;&#xA;    		return Fecha;&#xD;&#xA;    	}&#xD;&#xA;    	public void setFecha(Text fecha) {&#xD;&#xA;    		Fecha = fecha;&#xD;&#xA;    	}&#xD;&#xA;    	public Text getHora() {&#xD;&#xA;    		return Hora;&#xD;&#xA;    	}&#xD;&#xA;    	public void setHora(Text hora) {&#xD;&#xA;    		Hora = hora;&#xD;&#xA;    	}&#xD;&#xA;    	@Override&#xD;&#xA;    	public int hashCode() {&#xD;&#xA;    		final int prime = 31;&#xD;&#xA;    		int result = 1;&#xD;&#xA;    		result = prime * result + ((Fecha == null) ? 0 : Fecha.hashCode());&#xD;&#xA;    		result = prime * result + ((Hora == null) ? 0 : Hora.hashCode());&#xD;&#xA;    		result = prime * result&#xD;&#xA;    				+ ((Medicion == null) ? 0 : Medicion.hashCode());&#xD;&#xA;    		return result;&#xD;&#xA;    	}&#xD;&#xA;    	@Override&#xD;&#xA;    	public boolean equals(Object obj) {&#xD;&#xA;    		if (this == obj)&#xD;&#xA;    			return true;&#xD;&#xA;    		if (obj == null)&#xD;&#xA;    			return false;&#xD;&#xA;    		if (getClass() != obj.getClass())&#xD;&#xA;    			return false;&#xD;&#xA;    		ValorFechaHora other = (ValorFechaHora) obj;&#xD;&#xA;    		if (Fecha == null) {&#xD;&#xA;    			if (other.Fecha != null)&#xD;&#xA;    				return false;&#xD;&#xA;    		} else if (!Fecha.equals(other.Fecha))&#xD;&#xA;    			return false;&#xD;&#xA;    		if (Hora == null) {&#xD;&#xA;    			if (other.Hora != null)&#xD;&#xA;    				return false;&#xD;&#xA;    		} else if (!Hora.equals(other.Hora))&#xD;&#xA;    			return false;&#xD;&#xA;    		if (Medicion == null) {&#xD;&#xA;    			if (other.Medicion != null)&#xD;&#xA;    				return false;&#xD;&#xA;    		} else if (!Medicion.equals(other.Medicion))&#xD;&#xA;    			return false;&#xD;&#xA;    		return true;&#xD;&#xA;    	}&#xD;&#xA;    	public void readFields(DataInput in) throws IOException {&#xD;&#xA;    		&#xD;&#xA;    		Medicion = new IntWritable(in.readInt());&#xD;&#xA;    		Fecha = new Text(in.readLine());&#xD;&#xA;    		Hora = new Text(in.readLine());&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	public void write(DataOutput out) throws IOException {&#xD;&#xA;    		Medicion.write(out);&#xD;&#xA;    		Fecha.write(out);&#xD;&#xA;    		Hora.write(out);&#xD;&#xA;    	}	&#xD;&#xA;    }