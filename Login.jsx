export default function Login() {
  return <> 
    <div className="container d-flex justify-content-center text-center">
			<h1>Logowanie</h1>
		</div>
		<div className="container col-4">
			<form>
				<div className="form-outline mb-4">
					<input type="email" className="form-control form-control-lg" placeholder="Email" />
				</div>
				
				<div className="form-outline mb-4">
					<input type="password" className="form-control form-control-lg" placeholder="Hasło" />
				</div>

				<div className="d-flex justify-content-center">
					<button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
						<b>Zaloguj się</b>
					</button>
				</div>
			</form>
		</div>
  </>
}
